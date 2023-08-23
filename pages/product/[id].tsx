//pages/product[id]
import React, { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import {
  approachingExpirationState,
  expiredIngredientsState,
  insufficientIngredientsState,
  mainPostListState,
} from '../../recoil/states';
import useScroll from 'hooks/useScroll';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from '../../components/main/style';
import {
  fetchProductDetails,
  addProduct,
  handleDeleteProduct,
} from '../api/api';

const ProductPage = () => {
  const router = useRouter();

  const { id } = router.query;
  const { pathname } = router;
  const { hideScroll, scrollHandler } = useScroll();

  const [selectedStorageMethod, setSelectedStorageMethod] = useState('');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setSelectedImage(selectedFile);
    }
  };

  const [formData, setFormData] = useState({
    name: '가나',
    price: 10,
    vendor: 'op',
    receivingDate: '2000-10-02',
    expirationDate: '2000-10-02',
    location: '선반',
    requireQuant: 3,
    stockQuant: 4,
    siteToOrder: 'www',
    orderFreq: '80',
    image: 'sk',
  });

  const convertFormDataToJson = () => {
    const jsonFormData = {
      // id: getId(),
      name: formData.name,
      price: formData.price,
      vendor: formData.vendor,
      receivingDate: formData.receivingDate,
      expirationDate: formData.expirationDate,
      location: formData.location,
      requireQuant: formData.requireQuant,
      stockQuant: formData.stockQuant,
      siteToOrder: formData.siteToOrder,
      orderFreq: formData.orderFreq,
    };
    return jsonFormData;
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetchProductDetails(Number(id));
        setFormData(response);
        setSelectedImage(response.image || '');
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    if (id) {
      fetchDetails();
    }
  }, [id]);

  // 수정 API
  const handleEditProduct = async () => {
    try {
      const formDatas = new FormData();

      const jsonFormData = convertFormDataToJson();
      if (selectedImage !== null && selectedImage.name) {
        formDatas.append('image', selectedImage, selectedImage.name);
      }

      formDatas.append(
        'editProductRequest',
        new Blob([JSON.stringify(jsonFormData)], { type: 'application/json' }),
      );
      await addProduct(Number(id), formDatas);
    } catch (error) {
      console.error('Error editing product:', error);
    }
  };

  const handleDeleteClick = () => {
    if (typeof id === 'string') {
      const parsedId = parseInt(id, 10);
      if (!isNaN(parsedId)) {
        handleDeleteProduct(parsedId);
      }
    }
  };

  const setPostListState = useSetRecoilState(mainPostListState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log('Input Changed:', name, value);
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = () => {
    /** 수정 API  */
    handleEditProduct();
    router.push('/');
  };

  return (
    <S.Box hideScroll={hideScroll} onScroll={scrollHandler}>
      <S.Title title="재료 등록">재료상세</S.Title>
      <S.TopSection>
        <S.Button onClick={() => handleDeleteClick}>
          <Link href="/">삭제</Link>
        </S.Button>
        <S.Button type="submit" onClick={handleSubmit}>
          <Link href="/">수정</Link>
        </S.Button>
        <Link href="/">X</Link>
      </S.TopSection>

      <S.Form>
        <S.InforSection>
          <S.LeftSection>
            <S.StyledInput>
              <S.StorageMethodRadioGroup>
                <S.StyledInput>
                  <S.StorageMethodRadioGroup>
                    <S.StyledInput>
                      <S.StyledRadioInput>
                        <input
                          type="radio"
                          name="storageMethod"
                          value="냉동"
                          checked={selectedStorageMethod === '냉동'}
                          onChange={() => setSelectedStorageMethod('냉동')}
                        />
                        <span>냉동</span>
                      </S.StyledRadioInput>
                      <S.StyledRadioInput>
                        <input
                          type="radio"
                          name="storageMethod"
                          value="냉장"
                          checked={selectedStorageMethod === '냉장'}
                          onChange={() => setSelectedStorageMethod('냉장')}
                        />
                        <span>냉장</span>
                      </S.StyledRadioInput>
                      <S.StyledRadioInput>
                        <input
                          type="radio"
                          name="storageMethod"
                          value="상온"
                          checked={selectedStorageMethod === '상온'}
                          onChange={() => setSelectedStorageMethod('상온')}
                        />
                        <span>상온</span>
                      </S.StyledRadioInput>
                    </S.StyledInput>
                  </S.StorageMethodRadioGroup>
                </S.StyledInput>
              </S.StorageMethodRadioGroup>
            </S.StyledInput>
            <S.ImgInput>
              <input
                type="file"
                id="imageInput"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
              <label htmlFor="imageInput">
                <S.ImgInput>
                  <img
                    src={
                      selectedImage
                        ? URL.createObjectURL(selectedImage)
                        : `data:image/jpeg;base64,${selectedImage}`
                    }
                    alt="Selected Image"
                    style={{
                      maxWidth: '100%',
                      cursor: 'pointer',
                    }}
                  />
                </S.ImgInput>
              </label>
            </S.ImgInput>
          </S.LeftSection>
          <S.RightSection>
            <S.StyledInput>
              <S.Label>제품명</S.Label>
              <S.Input
                type="text"
                name="name"
                value={formData.name}
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
              <S.Label>판매 업체</S.Label>
              <S.Input
                type="text"
                name="vendor"
                value={formData.vendor}
                onChange={handleInputChange}
              />
            </S.StyledInput>
            <S.StyledInput>
              <S.Label>입고일</S.Label>
              <S.ReceiptDateInput>
                <S.ReceiptDateInputYearField
                  type="text"
                  name="receiptYear"
                  value={formData.receivingDate.split('-')[0]} // 년도
                  onChange={handleInputChange}
                  placeholder="년도"
                />
                <p>년</p>
                <S.ReceiptDateInputField
                  type="text"
                  name="receivingMonth"
                  value={formData.receivingDate.split('-')[1]} // 월
                  onChange={handleInputChange}
                />
                <p>월</p>
                <S.ReceiptDateInputField
                  type="text"
                  name="receivingDay"
                  value={formData.receivingDate.split('-')[2]} // 일
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
                  value={formData.expirationDate.split('-')[0]} // 년도
                  onChange={handleInputChange}
                  placeholder="년도"
                />
                <p>년</p>
                <S.ReceiptDateInputField
                  type="text"
                  name="expirationMonth"
                  value={formData.expirationDate.split('-')[1]} // 월
                  onChange={handleInputChange}
                />
                <p>월</p>
                <S.ReceiptDateInputField
                  type="text"
                  name="expirationDay"
                  value={formData.expirationDate.split('-')[2]} // 일
                  onChange={handleInputChange}
                  placeholder="일"
                />
              </S.ReceiptDateInput>
            </S.StyledInput>
            <S.StyledInput>
              <S.Label>재료위치</S.Label>
              <S.Input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </S.StyledInput>
            <S.QuantitySection>
              <S.QuantityInput>
                <S.Label>필수 수량</S.Label>
                <S.QuantityInputField
                  type="text"
                  name="requireQuant"
                  value={formData.requireQuant}
                  onChange={handleInputChange}
                />
              </S.QuantityInput>
              <S.QuantityInput>
                <S.Label>| 재고 수량</S.Label>
                <S.QuantityInputField
                  type="text"
                  name="stockQuant"
                  value={formData.stockQuant}
                  onChange={handleInputChange}
                />
              </S.QuantityInput>
            </S.QuantitySection>
            <S.StyledInput>
              <S.Label>발주사이트</S.Label>
              <S.Input
                type="text"
                name="siteToOrder"
                value={formData.siteToOrder}
                onChange={handleInputChange}
              />
            </S.StyledInput>

            <S.StyledInput>
              <S.Label>발주 빈도</S.Label>
              <S.Slider
                type="range"
                name="orderingFrequency"
                value={formData.orderFreq}
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
    </S.Box>
  );
};

export default ProductPage;
