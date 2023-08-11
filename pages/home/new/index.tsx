// http://localhost:8080/home/new

import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import ImgIcon from '../../../public/assets/icons/main/imgUpload.svg';
import * as S from '../../../components/main/style';
import { useState, SetStateAction, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Title } from 'components/community/Board/PostListBox/PostItemBox/style';
import { useSetRecoilState, RecoilRoot, useRecoilState } from 'recoil';
import {
  approachingExpirationState,
  postMainTitleState,
  mainPostListState,
  storageMethodState,
  ProductItem,
  StorageMethod,
} from '../../../recoil/states';
import { API } from '../../api/api';

const sortOptionList = ['냉동', '냉장', '상온'];
type IngredientsProps = {
  productsToShow: ProductItem[];
  storageMethodFilter: StorageMethod;
};

/** 제품 추가 페이지 */

const New = () => {
  const router = useRouter();
  const [productName, setProductName] = useRecoilState(postMainTitleState);
  const setPostListState = useSetRecoilState(mainPostListState);

  //냉동상온냉장
  const [selectedStorageMethod, setSelectedStorageMethod] =
    useState<string>('');
  const handleStorageMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedStorageMethod(e.target.value);
  };

  /** 필수 필드 ------------------------------------------------------------ */
  const validateRequiredFields = () => {
    const requiredFields = [
      'productName',
      'price',
      'seller',
      'receiptYear',
      'receiptMonth',
      'receiptDay',
      'expirationYear',
      'expirationMonth',
      'expirationDay',
      'requiredQuantity',
      'quantity',
      'orderingFrequency',
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`${field}을(를) 채워주세요.`);
        return false;
      }
    }

    return true;
  };

  const [formData, setFormData] = useState({
    productName: '가나',
    price: 100,
    seller: '아',
    receiptYear: '2023',
    receiptMonth: '05',
    receiptDay: '05',
    expirationYear: '2024',
    expirationMonth: '09',
    expirationDay: '08',
    ingredientLocation: '선반',
    requiredQuantity: 6,
    quantity: 8,
    orderingSite: 'www',
    orderingFrequency: '80',
    imageInfo: '',
    storageMethod: '',
  });

  // 이미지 input 값 받기
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = e => {
    setSelectedImage(e.target.files[0]);
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    console.log('Input Changed:', name, value);
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const [storeId, setStoreId] = useState(1);

  useEffect(() => {
    API.get('/api/product')
      .then(response => {
        console.log('-------------------------');
        console.log('첫 storeId api 호출: ', response);
        // 업데이트
        setStoreId(response.data?.result?.storeId ?? null);
      })
      .catch(error => {
        alert('요청실패');
        console.log(error);
      });
  }, []);

  const convertFormDataToJson = () => {
    const jsonFormData = {
      // id: getId(),
      name: formData.productName,
      price: formData.price,
      vendor: formData.seller,
      receivingDate: `${formData.receiptYear}-${formData.receiptMonth}-${formData.receiptDay}`,
      expirationDate: `${formData.expirationYear}-${formData.expirationMonth}-${formData.expirationDay}`,
      location: formData.ingredientLocation,
      requireQuant: formData.requiredQuantity,
      stockQuant: formData.quantity,
      siteToOrder: formData.orderingSite,
      orderFreq: formData.orderingFrequency,
    };
    return jsonFormData;
  };

  /** 제품 추가 api 호출 -------------------------------------------------------- */
  const handleSubmit = async () => {
    //유효성 검사
    if (!validateRequiredFields()) {
      return;
    }

    const formDatas = new FormData();
    const jsonFormData = convertFormDataToJson();
    const condition = selectedStorageMethod; // 선택한 저장 방법으로 condition 값 설정

    formDatas.append('image', selectedImage);
    formDatas.append(
      'editProductRequest',
      new Blob([JSON.stringify(jsonFormData)], { type: 'application/json' }),
    );
    try {
      await API.post(
        `/api/product/add?store=${storeId}&condition=${condition}`,
        formDatas,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      alert('제품 추가 성공');

      // 초기화
      setFormData({
        productName: '',
        price: '',
        seller: '',
        receiptYear: '',
        receiptMonth: '',
        receiptDay: '',
        expirationYear: '',
        expirationMonth: '',
        expirationDay: '',
        ingredientLocation: '',
        requiredQuantity: '',
        quantity: '',
        orderingSite: '',
        orderingFrequency: '',
        imageInfo: '',
        storageMethod: '',
      });
      setProductName('');
      // router.push("/");
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <S.Box>
      <RecoilRoot>
        <Title title="재료 등록">재료등록</Title>
        <S.TopSection>
          <S.Button>
            <Link href="/">취소</Link>
          </S.Button>
          <S.Button type="submit" onClick={handleSubmit}>
            <Link href="/">저장</Link>
          </S.Button>
        </S.TopSection>

        <S.Form>
          <S.InforSection>
            <S.LeftSection>
              <S.StyledInput>
                <S.StorageMethodRadioGroup>
                  <S.StyledInput>
                    <S.StyledRadioInput>
                      <input
                        type="radio"
                        name="storageMethod"
                        value="냉동"
                        checked={selectedStorageMethod === '냉동'}
                        onChange={handleStorageMethodChange}
                      />
                      <span>냉동</span>
                    </S.StyledRadioInput>
                    <S.StyledRadioInput>
                      <input
                        type="radio"
                        name="storageMethod"
                        value="냉장"
                        checked={selectedStorageMethod === '냉장'}
                        onChange={handleStorageMethodChange}
                      />
                      <span>냉장</span>
                    </S.StyledRadioInput>
                    <S.StyledRadioInput>
                      <input
                        type="radio"
                        name="storageMethod"
                        value="상온"
                        checked={selectedStorageMethod === '상온'}
                        onChange={handleStorageMethodChange}
                      />
                      <span>상온</span>
                    </S.StyledRadioInput>
                  </S.StyledInput>
                </S.StorageMethodRadioGroup>
              </S.StyledInput>
              <S.ImgInput>
                <label htmlFor="imageUpload">
                  {!selectedImage ? (
                    <Image
                      src={ImgIcon}
                      alt="Upload Icon"
                      width={124}
                      height={83}
                    />
                  ) : null}
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  name="imageInfo"
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />
                {selectedImage && (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected Image"
                    style={{ maxWidth: '100%', marginTop: '10px' }}
                  />
                )}
              </S.ImgInput>
            </S.LeftSection>
            <S.RightSection>
              <S.StyledInput>
                <S.Label>제품명</S.Label>
                <S.Input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  maxLength={11}
                  onChange={handleInputChange}
                />
              </S.StyledInput>
              <S.StyledInput>
                <S.Label>가격</S.Label>
                <S.Input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </S.StyledInput>
              <S.StyledInput>
                <S.Label>판매업체</S.Label>
                <S.Input
                  type="text"
                  name="seller"
                  value={formData.seller}
                  maxLength={29}
                  onChange={handleInputChange}
                />
              </S.StyledInput>

              <S.StyledInput>
                <S.Label>입고일</S.Label>
                <S.ReceiptDateInput>
                  <S.ReceiptDateInputYearField
                    type="text"
                    name="receiptYear"
                    value={formData.receiptYear}
                    onChange={handleInputChange}
                    placeholder="년도"
                  />
                  <p>년</p>
                  <S.ReceiptDateInputField
                    type="text"
                    name="receiptMonth"
                    value={formData.receiptMonth}
                    onChange={handleInputChange}
                    placeholder="월"
                  />
                  <p>월</p>
                  <S.ReceiptDateInputField
                    type="text"
                    name="receiptDay"
                    value={formData.receiptDay}
                    onChange={handleInputChange}
                    placeholder="일"
                  />
                </S.ReceiptDateInput>
              </S.StyledInput>
              <S.StyledInput>
                <S.Label>유통기한</S.Label>
                <S.ReceiptDateInput>
                  <S.ReceiptDateInputYearField
                    type="text"
                    name="expirationYear"
                    value={formData.expirationYear}
                    onChange={handleInputChange}
                    placeholder="년도"
                  />
                  <p>년</p>
                  <S.ReceiptDateInputField
                    type="text"
                    name="expirationMonth"
                    value={formData.expirationMonth}
                    onChange={handleInputChange}
                    placeholder="월"
                  />
                  <p>월</p>
                  <S.ReceiptDateInputField
                    type="text"
                    name="expirationDay"
                    value={formData.expirationDay}
                    onChange={handleInputChange}
                    placeholder="일"
                  />
                </S.ReceiptDateInput>
              </S.StyledInput>
              <S.StyledInput>
                <S.Label>재료위치</S.Label>
                <S.Input
                  type="text"
                  name="ingredientLocation"
                  value={formData.ingredientLocation}
                  maxLength={29}
                  onChange={handleInputChange}
                />
              </S.StyledInput>
              <S.QuantitySection>
                <S.QuantityInput>
                  <S.Label>필수 수량</S.Label>
                  <S.QuantityInputField
                    type="text"
                    name="requiredQuantity"
                    value={formData.requiredQuantity}
                    onChange={handleInputChange}
                  />
                </S.QuantityInput>
                <S.QuantityInput>
                  <S.Label>| 재고 수량</S.Label>
                  <S.QuantityInputField
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                  />
                </S.QuantityInput>
              </S.QuantitySection>
              <S.StyledInput>
                <S.Label>발주사이트</S.Label>
                <S.Input
                  type="text"
                  name="orderingSite"
                  value={formData.orderingSite}
                  maxLength={200}
                  onChange={handleInputChange}
                />
              </S.StyledInput>

              <S.StyledInput>
                <S.Label>발주 빈도</S.Label>
                <S.Slider
                  type="range"
                  name="orderingFrequency"
                  value={formData.orderingFrequency}
                  step="20"
                  onChange={handleInputChange}
                ></S.Slider>
              </S.StyledInput>
            </S.RightSection>
          </S.InforSection>
        </S.Form>
        {/* 추후 삭제 예정.. */}
        {/* <Ingredients productsToShow={sortedPostList} storageMethod={formData.storageMethod} /> */}
      </RecoilRoot>
    </S.Box>
  );
};

export default New;
