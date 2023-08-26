import { KeyboardEvent, MouseEvent, useRef, useState } from 'react';

/** scroll시에만 scroll 보이게 하기 */
const useSearch = () => {
  const enteredValueRef = useRef(null);

  const [enteredValue, setEnteredValue] = useState('');

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    // enter 입력 시 검색
    if (e.key === 'Enter') {
      e.preventDefault();

      return setEnteredValue((e.target as HTMLInputElement).value);
    }
  };

  const onSearchHandler = (e: MouseEvent<HTMLButtonElement>) => {
    // 검색 버튼 클릭 시 검색
    e.preventDefault();

    if (enteredValueRef.current) {
      return setEnteredValue(
        (enteredValueRef.current as HTMLInputElement).value,
      );
    }
  };

  return { enteredValue, setEnteredValue, onKeyDownHandler, onSearchHandler };
};

export default useSearch;
