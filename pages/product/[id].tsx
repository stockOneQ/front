//pages/product[id]
import { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ingredientsListState } from "../../recoil/states";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Get the list of gradients from the Recoil atom
  const ingredients = useRecoilValue(ingredientsListState);

  // 주어진 id와 일치하는 리스트 찾기
  const item = ingredients.find((item) => item.id === Number(id));
  // productName 수정을 위한 상태 관리
  const [productName, setProductName] = useState(item.productName);

  // Recoil(atom)를 업데이트하기 위한 설정 함수
  const setGradients = useSetRecoilState(ingredientsListState);

  // 인풋 값이 변경될 때 Recoil(atom) 내 productName을 업데이트
  const handleChange = (event) => {
    const updatedProductName = event.target.value;
    setProductName(updatedProductName);
    // Update productName in the Recoil atom
    setGradients((oldGradients) =>
      oldGradients.map((ingredient) =>
      ingredient.id === item.id ? { ...ingredient, productName: updatedProductName } : ingredient
      )
    );
  };

  if (!item) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Product ID: {id}</h1>
      {/* productName을 수정하기 위한 인풋 */}
      <input type="text" value={productName} onChange={handleChange} />
      {/* 업데이트된 제품 이름을 표시*/}
      <p>Product Name: {productName}</p>
    </div>
  );
};

export default ProductPage;