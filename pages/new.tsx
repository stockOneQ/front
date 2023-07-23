import Link from "next/link";
import Image from 'next/image';
import ImgIcon from "../public/assets/icons/imgUpload.svg";
import * as S from "../components/main/style";
import { useState,SetStateAction } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState, useRecoilValue, RecoilRoot, useRecoilState } from "recoil";
import { approachingExpirationState, postMainTitleState, mainPostListState, expiredIngredientsState, insufficientIngredientsState} from "../recoil/states";

let id = 1;
const getId = () => {
  return id++;
};

/** 제품 추가 페이지 */
const New = () => {
  const router = useRouter();
  const [productName, setProductName] = useRecoilState(postMainTitleState);
  const setPostList = useSetRecoilState(mainPostListState);

  //유통기한임박 재료 
  const setApproachingExpiration = useSetRecoilState(approachingExpirationState);
  //유통기한 지난 재료 
  const expiredIngredients = useRecoilValue(expiredIngredientsState);
  const setExpiredIngredients = useSetRecoilState(expiredIngredientsState);
  //부족한 재료 
  const setinsufficientIngredients = useSetRecoilState(insufficientIngredientsState);

  //현재 날짜와 만료 날짜 사이의 일수 차이를 계산하는 함수
  const calculateDaysRemaining = () => {
    const currentDate = new Date();
    const expirationDate = new Date(
      parseInt(formData.expirationYear),
      parseInt(formData.expirationMonth) - 1, // Months are 0-indexed, so subtract 1
      parseInt(formData.expirationDay)
    );
    const timeDifference = expirationDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
  };

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
    console.log("Input Changed:", name, value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // 저장하기 
  const handleSubmit = () => {
    const newProduct = {
      id: getId(),
      productName: productName,
      price: formData.price,
      seller: formData.seller,
      receiptYear: formData.receiptYear,
      receiptMonth: formData.receiptMonth,
      receiptDay: formData.receiptDay,
      expirationYear: formData.expirationYear,
      expirationMonth: formData.expirationMonth,
      expirationDay: formData.expirationDay,
      ingredientLocation: formData.ingredientLocation,
      requiredQuantity: formData.requiredQuantity,
      quantity: formData.quantity,
      orderingSite: formData.orderingSite,
      orderingFrequency: formData.orderingFrequency,
      imageInfo: formData.imageInfo,
    };

    // 업데이트 recoil state
    setPostList((prevPostList) => [...prevPostList, newProduct]);
    const newProductId = newProduct.id.toString();
    //부족한 재료 
    const newQuantity = parseInt(formData.quantity, 10);
    const newRequiredQuantity = parseInt(formData.requiredQuantity, 10);
    // 유통기한 계산
    const daysRemaining = calculateDaysRemaining();
    if (newQuantity <= newRequiredQuantity) {
      //부족한 재료
      setinsufficientIngredients((prevInsufficientIngredients) => [...prevInsufficientIngredients, newProductId]);
      setPostList((prevPostList) =>
        prevPostList.map((item) =>
          item.id === newProductId ? { ...item, category: "no" } : item
        )
      );
    } else if (daysRemaining <= 0) {
      // 유통기한지난 재료
      setExpiredIngredients((prevExpiredIngredients) => [...prevExpiredIngredients, newProductId]);
      setPostList((prevPostList) =>
        prevPostList.map((item) =>
          item.id === newProductId
            ? { ...item, category: "afterDate" }
            : item
        )
      );
    } else if (daysRemaining <= 3) {
      // 유통기한임박 재료
      setApproachingExpiration((prevApproachingExpiration) => {
        if (Array.isArray(prevApproachingExpiration)) {
          return [...prevApproachingExpiration, newProductId];
        } else {
          return [prevApproachingExpiration, newProductId];
        }
      });
      setPostList((prevPostList) =>
        prevPostList.map((item) =>
          item.id === newProductId
            ? { ...item, category: "beforeDate" }
            : item
        )
      );
    }
    // 저장하고 form data 초기화
    setFormData({
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

    setProductName("");
    router.push("/");
  };



  return (
    <S.Box>
      <RecoilRoot>

        {/* <Title title="재료 등록" /> */}
        <S.TopSection>
          <Link href='/'>작성취소</Link>
          <S.Button type="submit" onClick={handleSubmit}><Link href='/'>저장</Link></S.Button>
        </S.TopSection>

        <S.Form >
          <S.InforSection>
            <S.LeftSection>
              <S.ImgInput>
                <Image src={ImgIcon} alt="my_page_icon" width={124} height={83} />
              </S.ImgInput>
            </S.LeftSection>
            <S.RightSection>
              <S.StyledInput>
                <S.Label>제품명</S.Label>
                <S.Input
                  type="text"
                  name="productName"
                  value={productName}
                  onChange={(e: { target: { value: SetStateAction<string> } }) =>
                    setProductName(e.target.value)
                  }
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
                >
                </S.Slider>
              </S.StyledInput>
            </S.RightSection>
          </S.InforSection>
        </S.Form>
      </RecoilRoot>
    </S.Box>
  );
};


export default New;