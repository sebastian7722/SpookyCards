import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  decrementTime,
  selectIsOverlayVisible,
  selectTime,
} from '../features/game/overlay/overlay.slice';
import {useAppSelector} from './use-redux';

export function useGameTime() {
  const dispatch = useDispatch();
  const time = useAppSelector(selectTime);
  const hasGameStarted = !useAppSelector(selectIsOverlayVisible);

  useEffect(() => {
    if (hasGameStarted) {
      const timer = setTimeout(() => {
        dispatch(decrementTime());
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [time, hasGameStarted]);

  return time;
}
