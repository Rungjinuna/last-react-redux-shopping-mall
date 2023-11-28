import { useAppSelector } from './redux';

export function useAuth() {
  const { id, email, token } = useAppSelector((state) => state.user);
  return {
    //false를 true로 변환, 첫번째 '!' 연산자에 의해 반전된 값이 다시 반전됨
    isAuth: !!email,
    email,
    id,
    token,
  };
}
