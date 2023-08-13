import { useSetRecoilState } from 'recoil';
import { searchInputState } from 'recoil/states';
import * as S from './style';

const SearchInputBar = ({
  value,
  onChange,
}: {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const setSearchInput = useSetRecoilState(searchInputState);

  const handleEnter = (e: { key: string }) => {
    if (e.key === 'Enter') setSearchInput(value);
  };

  return (
    <S.Input
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      onKeyDown={handleEnter}
    />
  );
};

export default SearchInputBar;
