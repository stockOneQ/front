//pages/product[id]
import React, { useState, ChangeEvent } from 'react';
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
import { Title } from 'components/community/Board/PostListBox/PostItemBox/style';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from '../../components/main/style';
import ImgIcon from '../../public/assets/icons/imgUpload.svg';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // /** API 호출------------------------------------------------- */
  // /** --------------------------------------------------------- */
  // /** --------------------------------------------------------- */

  // // 수정 API
  // const handleEditProduct = async () => {
  //   try {
  //     const response = await axios.put(`/api/product/edit/${id}`, formData);
  //     console.log("Success editing product", response.data);
  //   } catch (error) {
  //     console.error("Error editing product:", error);
  //   }
  // };

  /** --------------------------------------------------------- */
  /** --------------------------------------------------------- */
  /** --------------------------------------------------------- */

  const calculateDaysRemaining = expirationDate => {
    const currentDate = new Date();
    const expirationDateObj = new Date(expirationDate);
    const timeDifference = expirationDateObj.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
  };

  const setApproachingExpiration = useSetRecoilState(
    approachingExpirationState,
  );
  const setExpiredIngredients = useSetRecoilState(expiredIngredientsState);
  const setInsufficientIngredients = useSetRecoilState(
    insufficientIngredientsState,
  );

  const ingredients = useRecoilValue(mainPostListState);
  const item = ingredients.find(item => item.id === Number(id));
  const [formData, setFormData] = useState(item || {});
  const setPostListState = useSetRecoilState(mainPostListState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    console.log('Input Changed:', name, value);
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = () => {
    const daysRemaining = calculateDaysRemaining(
      `${formData.expirationYear}-${formData.expirationMonth}-${formData.expirationDay}`,
    );

    if (formData.quantity <= formData.requiredQuantity) {
      setInsufficientIngredients(prevInsufficientIngredients => [
        ...prevInsufficientIngredients,
        item.id,
      ]);
      setPostListState(prevPostList =>
        prevPostList.map(product =>
          product.id === Number(id) ? { ...product, category: 'no' } : product,
        ),
      );
    } else if (daysRemaining <= 0) {
      setExpiredIngredients(prevExpiredIngredients => [
        ...prevExpiredIngredients,
        item.id,
      ]);
      setPostListState(prevPostList =>
        prevPostList.map(product =>
          product.id === Number(id)
            ? { ...product, category: 'afterDate' }
            : product,
        ),
      );
    } else if (daysRemaining <= 3) {
      setApproachingExpiration(prevApproachingExpiration => {
        if (Array.isArray(prevApproachingExpiration)) {
          return [...prevApproachingExpiration, item.id];
        } else {
          return [prevApproachingExpiration, item.id];
        }
      });
      setPostListState(prevPostList =>
        prevPostList.map(product =>
          product.id === Number(id)
            ? { ...product, category: 'beforeDate' }
            : product,
        ),
      );
    }
    /** 수정 API  */
    //handleEditProduct();

    router.push('/');
  };

  if (!item) {
    return <div>Product not found</div>;
  }

  const [selectedStorageMethod, setSelectedStorageMethod] = useState(
    formData.storageMethod || '냉동',
  );

  const handleStorageMethodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedStorageMethod(e.target.value);
    // 업데이트 formData
    setFormData(prevFormData => ({
      ...prevFormData,
      storageMethod: e.target.value,
    }));
  };

  const handleImageClick = () => {
    console.log('Image clicked');
  };

  return (
    <S.Box>
      <Title title="재료 등록">재료등록</Title>
      <S.TopSection>
        <Link href="/">작성취소</Link>
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
                  <S.StorageMethodRadioGroup>
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
                  </S.StorageMethodRadioGroup>
                </S.StyledInput>
              </S.StorageMethodRadioGroup>
            </S.StyledInput>
            <S.ImgInput>
              <S.ImgInput>
                <Image
                  src={formData.imageInfo || ImgIcon}
                  alt="my_page_icon"
                  width={124}
                  height={83}
                  onClick={handleImageClick}
                />
              </S.ImgInput>
            </S.ImgInput>
          </S.LeftSection>
          <S.RightSection>
            <S.StyledInput>
              <S.Label>제품명</S.Label>
              <S.Input
                type="text"
                name="productName"
                value={formData.productName || ''}
                onChange={handleInputChange}
              />
            </S.StyledInput>
            <S.StyledInput>
              <S.Label>가격</S.Label>
              <S.Input
                type="text"
                name="price"
                value={formData.price || ''}
                onChange={handleInputChange}
              />
            </S.StyledInput>
            <S.StyledInput>
              <S.Label>판매 업체</S.Label>
              <S.Input
                type="text"
                name="seller"
                value={formData.seller || ''}
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
    </S.Box>
  );
};

export default ProductPage;
