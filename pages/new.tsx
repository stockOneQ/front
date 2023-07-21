import { useState } from "react";
import Title from "components/common/PageTitleContainer";
import { useSetRecoilState, useRecoilValue, RecoilRoot } from "recoil";
import { postListState } from "recoil/states";
import Link from "next/link";
import Image from "next/image";
import ImgIcon from "../public/assets/icons/cameraIcon.svg";
import * as S from "../components/main/style";

/** 제품 추가 페이지 */
const New = () => {
  const [productName, setProductName] = useState("");
  const setPostList = useSetRecoilState(postListState);
  const postList = useRecoilValue(postListState);
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    seller: "",
    receiptYear: "",
    receiptMonth: "",
    receiptDay: "",
    expirationYear: "",
    expirationMonth: "",
    expirationDay: "",
    ingredientLocation: "",
    requiredQuantity: "",
    quantity: "",
    orderingSite: "",
    orderingFrequency: "",
    imageInfo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //저장
  const handleSubmit = () => {
    const newPost = {
      productName,
    };
    // 업데이트 새로운 main ITEM에
    setPostList((prevPostList) => [...prevPostList, newPost]);
    // 초기화 input
    setProductName("");
  };

  return (
    <S.Box>
      <RecoilRoot>
        <Title title="게시글 작성" />
        <S.TopSection>
          <Link href="/">작성취소</Link>
          <S.Button type="submit">
            <Link href="/">저장</Link>
          </S.Button>
        </S.TopSection>

        <S.Form onSubmit={handleSubmit}>
          <S.InforSection>
            <S.LeftSection>
              <S.ImgInput>
                <S.Label>이미지</S.Label>
                <Image
                  src={ImgIcon}
                  alt="my_page_icon"
                  width={40}
                  height={40}
                />
              </S.ImgInput>
            </S.LeftSection>
            <S.RightSection>
              <S.StyledInput>
                <S.Label>제품명</S.Label>
                <S.Input
                  type="text"
                  value={formData.productName}
                  onChange={handleInputChange}
                />
              </S.StyledInput>
              <S.StyledInput>
                <S.Label>가격</S.Label>
                <S.Input
                  type="text"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </S.StyledInput>
              <S.StyledInput>
                <S.Label>판매업체</S.Label>
                <S.Input
                  type="text"
                  value={formData.seller}
                  onChange={handleInputChange}
                />
              </S.StyledInput>

              <S.StyledInput>
                <S.Label>입고일</S.Label>
                <S.ReceiptDateInput>
                  <S.ReceiptDateInputField
                    type="text"
                    value={formData.receiptYear}
                    onChange={handleInputChange}
                    placeholder="년도"
                  />
                  <p>년</p>
                  <S.ReceiptDateInputField
                    type="text"
                    value={formData.receiptMonth}
                    onChange={handleInputChange}
                    placeholder="월"
                  />
                  <p>월</p>
                  <S.ReceiptDateInputField
                    type="text"
                    value={formData.receiptDay}
                    onChange={handleInputChange}
                    placeholder="일"
                  />
                  <p>일</p>
                </S.ReceiptDateInput>
              </S.StyledInput>
              <S.StyledInput>
                <S.Label>유통기한</S.Label>
                <S.ReceiptDateInput>
                  <S.ReceiptDateInputField
                    type="text"
                    value={formData.expirationYear}
                    onChange={handleInputChange}
                    placeholder="년도"
                  />
                  <p>년</p>
                  <S.ReceiptDateInputField
                    type="text"
                    value={formData.expirationMonth}
                    onChange={handleInputChange}
                    placeholder="월"
                  />
                  <p>월</p>
                  <S.ReceiptDateInputField
                    type="text"
                    value={formData.expirationDay}
                    onChange={handleInputChange}
                    placeholder="일"
                  />
                  <p>일</p>
                </S.ReceiptDateInput>
              </S.StyledInput>
              <S.StyledInput>
                <S.Label>재료위치</S.Label>
                <S.Input
                  type="text"
                  value={formData.ingredientLocation}
                  onChange={handleInputChange}
                />
              </S.StyledInput>
              <S.QuantitySection>
                <S.QuantityInput>
                  <S.Label>필수 수량</S.Label>
                  <S.QuantityInputField
                    type="text"
                    value={formData.requiredQuantity}
                    onChange={handleInputChange}
                  />
                </S.QuantityInput>
                <S.QuantityInput>
                  <S.Label>재고 수량</S.Label>
                  <S.QuantityInputField
                    type="text"
                    value={formData.quantity}
                    onChange={handleInputChange}
                  />
                </S.QuantityInput>
              </S.QuantitySection>
              <S.StyledInput>
                <S.Label>발주사이트</S.Label>
                <S.Input
                  type="text"
                  value={formData.orderingSite}
                  onChange={handleInputChange}
                />
              </S.StyledInput>

              <S.StyledInput>
                <S.Label>발주 빈도</S.Label>
                <S.Slider
                  type="range"
                  value={formData.orderingFrequency}
                  step="20"
                  onChange={handleInputChange}
                ></S.Slider>
              </S.StyledInput>
            </S.RightSection>
          </S.InforSection>
        </S.Form>
      </RecoilRoot>
    </S.Box>
  );
};

export default New;
