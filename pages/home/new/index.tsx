// http://localhost:8080/home/new

import Link from 'next/link';
import Image from 'next/image';
import ImgIcon from '../../../public/assets/icons/main/imgUpload.svg';
import * as S from '../../../components/main/style';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useScroll from 'hooks/useScroll';
import { useSetRecoilState, RecoilRoot, useRecoilState } from 'recoil';
import { postMainTitleState, mainPostListState } from '../../../recoil/states';
import { API } from '../../api/api';

const sortOptionList = ['냉동', '냉장', '상온'];

/** 제품 추가 페이지 */

const New = () => {
  const router = useRouter();
  const [productName, setProductName] = useRecoilState(postMainTitleState);
  const { hideScroll, scrollHandler } = useScroll();
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

  const [formData, setFormData] = useState({
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

  const validateRequiredFields = () => {
    if (
      !formData.productName ||
      !formData.price ||
      !formData.seller ||
      !formData.receiptYear ||
      !formData.receiptMonth ||
      !formData.receiptDay ||
      !formData.expirationYear ||
      !formData.expirationMonth ||
      !formData.expirationDay ||
      !formData.requiredQuantity ||
      !formData.quantity ||
      !formData.orderingFrequency
    ) {
      alert('모든 필수 항목을 채워주세요.');
      return false;
    }

    return true;
  };

  // 이미지 input 값 받기
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]; // Get the selected file from the input
    setSelectedImage(selectedFile || null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log('Input Changed:', name, value);
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const [storeId, setStoreId] = useState(1);

  useEffect(() => {
    API.get('/api/product')
      .then(response => {
        // 업데이트
        setStoreId(response.data?.result?.storeId ?? null);
      })
      .catch(error => {
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
    if (selectedImage) {
      formDatas.append('image', selectedImage);
    }

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
      router.push('/');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <S.Box>
      <RecoilRoot>
        <S.Title title="재료 등록">재료등록</S.Title>
        <S.TopSection>
          <S.Button>
            <Link href="/">취소</Link>
          </S.Button>
          <S.Button type="submit" onClick={handleSubmit}>
            저장
          </S.Button>
        </S.TopSection>

        <S.Form hideScroll={hideScroll} onScroll={scrollHandler}>
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
                  autoComplete="off"
                  placeholder="춘천 냉동딸기 150G"
                />
              </S.StyledInput>
              <S.StyledInput>
                <S.Label>가격</S.Label>
                <S.Input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  autoComplete="off"
                  placeholder="15000"
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
                  autoComplete="off"
                  placeholder="춘천 딸기하우스"
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
                    placeholder="YYYY"
                    autoComplete="off"
                  />
                  <p>년</p>
                  <S.ReceiptDateInputField
                    type="text"
                    name="receiptMonth"
                    value={formData.receiptMonth}
                    onChange={handleInputChange}
                    placeholder="MM"
                    autoComplete="off"
                  />
                  <p>월</p>
                  <S.ReceiptDateInputField
                    type="text"
                    name="receiptDay"
                    value={formData.receiptDay}
                    onChange={handleInputChange}
                    placeholder="DD"
                    autoComplete="off"
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
                    placeholder="YYYY"
                    autoComplete="off"
                  />
                  <p>년</p>
                  <S.ReceiptDateInputField
                    type="text"
                    name="expirationMonth"
                    value={formData.expirationMonth}
                    onChange={handleInputChange}
                    placeholder="MM"
                    autoComplete="off"
                  />
                  <p>월</p>
                  <S.ReceiptDateInputField
                    type="text"
                    name="expirationDay"
                    value={formData.expirationDay}
                    onChange={handleInputChange}
                    placeholder="DD"
                    autoComplete="off"
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
                  autoComplete="off"
                  placeholder="1번 냉동실 1층"
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
                    autoComplete="off"
                  />
                </S.QuantityInput>
                <S.QuantityInput>
                  <S.LabelQuant> 재고 수량</S.LabelQuant>
                  <S.QuantityInputField
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    autoComplete="off"
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
                  autoComplete="off"
                  placeholder="http://www.stockOneQ.com"
                />
              </S.StyledInput>

              <S.StyledInput>
                <S.Label>발주 빈도</S.Label>
                <S.Slider
                  type="range"
                  name="orderingFrequency"
                  value={formData.orderingFrequency}
                  min="0"
                  max="100"
                  step="20"
                  onChange={handleInputChange}
                />
                <S.RangeValues>
                  <S.RangeValue>0</S.RangeValue>
                  <S.RangeValue>20</S.RangeValue>
                  <S.RangeValue>40</S.RangeValue>
                  <S.RangeValue>60</S.RangeValue>
                  <S.RangeValue>80</S.RangeValue>
                  <S.RangeValue>100</S.RangeValue>
                </S.RangeValues>
              </S.StyledInput>
            </S.RightSection>
          </S.InforSection>
        </S.Form>
      </RecoilRoot>
    </S.Box>
  );
};

export default New;
