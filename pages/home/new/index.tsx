// http://localhost:8080/home/new

import Link from "next/link";
import Image from 'next/image';
import { calculateDaysRemaining } from "utils/calculateCondition";
import axios from 'axios';
import ImgIcon from "../public/assets/icons/imgUpload.svg";
import * as S from "../../../components/main/style";
import { useState, SetStateAction, useEffect } from "react";
import { useRouter } from "next/router";
import { Title } from "components/community/Board/PostListBox/PostItemBox/style";
import { useSetRecoilState, useRecoilValue, RecoilRoot, useRecoilState } from "recoil";
import { approachingExpirationState, postMainTitleState, mainPostListState, expiredIngredientsState, insufficientIngredientsState, storageMethodState } from "../../../recoil/states";
import Ingredients from "components/main/Ingredients";


const sortOptionList = ["냉동", "냉장", "상온"];

let id = 1;
const getId = () => {
  return id++;
};

/** 제품 추가 페이지 */

const New = () => {
  
  const [productName, setProductName] = useRecoilState(postMainTitleState);
  const setPostListState = useSetRecoilState(mainPostListState);

  //냉동상온냉장
  const [selectedStorageMethod, setSelectedStorageMethod] = useState<string>('');
  const handleStorageMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStorageMethod(e.target.value);
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
    storageMethod: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("Input Changed:", name, value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //빈도순 정렬
  const [postList, setPostList] = useRecoilState(mainPostListState);
  const [sortedPostList, setSortedPostList] = useState([]);
  useEffect(() => {
    const sortedList = [...postList].sort((a, b) => a.orderingFrequency - b.orderingFrequency);
    setSortedPostList(sortedList);
  }, [postList]);


  // //유통기한임박 재료 
  // const setApproachingExpiration = useSetRecoilState(approachingExpirationState);
  // //유통기한 지난 재료 
  // const expiredIngredients = useRecoilValue(expiredIngredientsState);
  // const setExpiredIngredients = useSetRecoilState(expiredIngredientsState);
  // //부족한 재료 
  // const setinsufficientIngredients = useSetRecoilState(insufficientIngredientsState);
  // //냉장 냉동 상온
  // const setstorageMethod = useRecoilValue(storageMethodState);

  // //현재 날짜와 만료 날짜 사이의 일수 차이를 계산하는 함수
  // const daysRemaining = calculateDaysRemaining(
  //   formData.expirationYear,
  //   formData.expirationMonth,
  //   formData.expirationDay
  // );

  // // 저장하기 
  // const handleSubmit = () => {

  //   console.log(imageInfo);
  //   if (productName.length >= 11) {
  //     alert("제목을 11글자 이하로 입력해 주세요.");
  //     return;
  //   }
  //   if (formData.orderingSite.length >= 200) {
  //     alert("발주사이트를 200자 이하로 입력해 주세요.");
  //     return;
  //   }
  //   if (formData.seller.length >= 200) {
  //     alert("판매업체 29자 이하로 입력해 주세요.");
  //     return;
  //   }
  //   if (formData.ingredientLocation.length >= 200) {
  //     alert("재료위치 29자 이하로 입력해 주세요.");
  //     return;
  //   }

  //   const requiredFields = [
  //     "seller",
  //     // "receiptYear",
  //     // "receiptMonth",
  //     // "receiptDay",
  //     // "expirationYear",
  //     // "expirationMonth",
  //     // "expirationDay",
  //     // "ingredientLocation",
  //     // "requiredQuantity",
  //     // "quantity",
  //     // "orderingFrequency",
  //   ];

  //   for (const field of requiredFields) {
  //     if (!formData[field]) {
  //       alert(`${field}을(를) 채워주세요.`);
  //       return;
  //     }
  //   }

  //   const newProduct = {
  //     id: getId(),
  //     productName: productName,
  //     price: formData.price,
  //     seller: formData.seller,
  //     receiptYear: formData.receiptYear,
  //     receiptMonth: formData.receiptMonth,
  //     receiptDay: formData.receiptDay,
  //     expirationYear: formData.expirationYear,
  //     expirationMonth: formData.expirationMonth,
  //     expirationDay: formData.expirationDay,
  //     ingredientLocation: formData.ingredientLocation,
  //     requiredQuantity: formData.requiredQuantity,
  //     quantity: formData.quantity,
  //     orderingSite: formData.orderingSite,
  //     orderingFrequency: formData.orderingFrequency,
  //     imageInfo: selectedImage ? URL.createObjectURL(selectedImage) : "", 
  //     storageMethod: selectedStorageMethod,
  //   };

  
  //   // 업데이트 recoil state
  //   setPostListState((prevPostList) => [...prevPostList, newProduct]);
  //   const sortedList = [...postList].sort((a, b) => a.orderingFrequency - b.orderingFrequency);
  //   setSortedPostList(sortedList);

  //   const newProductId = newProduct.id.toString();
  //   //부족한 재료 
  //   const newQuantity = parseInt(formData.quantity, 10);
  //   const newRequiredQuantity = parseInt(formData.requiredQuantity, 10);
  //   // 유통기한 계산
  //   const daysRemaining = calculateDaysRemaining();


  //   if (newQuantity <= newRequiredQuantity) {
  //     //부족한 재료
  //     setinsufficientIngredients((prevInsufficientIngredients) => [...prevInsufficientIngredients, newProductId]);
  //     setPostList((prevPostList) =>
  //       prevPostList.map((item) =>
  //         item.id === newProductId ? { ...item, category: "no" } : item
  //       )
  //     );
  //   } else if (daysRemaining <= 0) {
  //     // 유통기한지난 재료
  //     setExpiredIngredients((prevExpiredIngredients) => [...prevExpiredIngredients, newProductId]);
  //     setPostList((prevPostList) =>
  //       prevPostList.map((item) =>
  //         item.id === newProductId
  //           ? { ...item, category: "afterDate" }
  //           : item
  //       )
  //     );
  //   } else if (daysRemaining <= 3) {
  //     // 유통기한임박 재료
  //     setApproachingExpiration((prevApproachingExpiration) => {
  //       if (Array.isArray(prevApproachingExpiration)) {
  //         return [...prevApproachingExpiration, newProductId];
  //       } else {
  //         return [prevApproachingExpiration, newProductId];
  //       }
  //     });
  //     setPostList((prevPostList) =>
  //       prevPostList.map((item) =>
  //         item.id === newProductId
  //           ? { ...item, category: "beforeDate" }
  //           : item
  //       )
  //     );
  //   }
  //   // 저장하고 form data 초기화
  //   setFormData({
  //     productName: "",
  //     price: "",
  //     seller: "",
  //     receiptYear: "",
  //     receiptMonth: "",
  //     receiptDay: "",
  //     expirationYear: "",
  //     expirationMonth: "",
  //     expirationDay: "",
  //     ingredientLocation: "",
  //     requiredQuantity: "",
  //     quantity: "",
  //     orderingSite: "",
  //     orderingFrequency: "",
  //     imageInfo: "",
  //     storageMethod: "",
  //   });

  //   setProductName("");
  //   // router.push("/");
  // };

  /** ---------------------------------------------------------- */
  /** ---------------------------------------------------------- */
  /** ---------------------------------------------------------- */

  //데이터 json 이미지 아직 미구현
  const convertFormDataToJson = () => {
    const jsonFormData = {
      id: getId(),
      name: productName,
      price: formData.price,
      vendor: formData.seller,
      receiptDate: `${formData.receiptYear}-${formData.receiptMonth}-${formData.receiptDay}`,
      expirationDate: `${formData.expirationYear}-${formData.expirationMonth}-${formData.expirationDay}`,
      location: formData.ingredientLocation,
      requireQuant: formData.requiredQuantity,
      stockQuant: formData.quantity,
      siteToOrder: formData.orderingSite,
      orderFreq: formData.orderingFrequency,
      imageInfo: selectedImage ? URL.createObjectURL(selectedImage) : "", //파일선택 
      storageMethod: selectedStorageMethod,
    };
    return jsonFormData;
  };

  //제품 추가 api 호출
  const handleSubmit = async () => {
    if (productName.length >= 11) {
      alert("제목을 11글자 이하로 입력해 주세요.");
      return;
    }
    if (formData.orderingSite.length >= 200) {
      alert("발주사이트를 200자 이하로 입력해 주세요.");
      return;
    }
    if (formData.seller.length >= 200) {
      alert("판매업체 29자 이하로 입력해 주세요.");
      return;
    }
    if (formData.ingredientLocation.length >= 200) {
      alert("재료위치 29자 이하로 입력해 주세요.");
      return;
    }

    const requiredFields = [
      "seller",
      // "receiptYear",
      // "receiptMonth",
      // "receiptDay",
      // "expirationYear",
      // "expirationMonth",
      // "expirationDay",
      // "ingredientLocation",
      // "requiredQuantity",
      // "quantity",
      // "orderingFrequency",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`${field}을(를) 채워주세요.`);
        return;
      }
    }

    const jsonFormData = convertFormDataToJson();
    try {
      const response = await axios.post('/api/product/add', jsonFormData);
      const newProduct = response.data;

      // 업데이트
      setPostListState((prevPostList) => [...prevPostList, newProduct]);

      // 초기화 
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
        storageMethod: "",
      });
      setProductName("");
      setSelectedStorageMethod("");


      //router.push("/");
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  /** ---------------------------------------------------------- */
  /** ---------------------------------------------------------- */
  /** ---------------------------------------------------------- */
  return (
    <S.Box>
      <RecoilRoot>

        <Title title="재료 등록">재료등록</Title>
        <S.TopSection>
          <Link href='/'>작성취소</Link>
          <S.Button type="submit" onClick={handleSubmit}><Link href='/'>저장</Link></S.Button>
        </S.TopSection>

        <S.Form >
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
                <input type="file"
                  name="imageInfo"
                  value={formData.imageInfo}
                  onChange={handleImageChange} />
                {selectedImage && (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected Image"
                    style={{ maxWidth: '100%', marginTop: '10px' }}
                  />
                )}
                {/* <Image src={ImgIcon} alt="my_page_icon" width={124} height={83} /> */}
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
        {/* 추후 삭제 예정.. */}
        <Ingredients productsToShow={sortedPostList} storageMethod={formData.storageMethod} />
      </RecoilRoot>
    </S.Box>
  );
};


export default New;