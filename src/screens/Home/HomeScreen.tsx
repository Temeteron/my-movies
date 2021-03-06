import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFavouritesAsync } from '~store/favourites/favouritesSlice';
import FavouritesList from '~screens/Home/components/FavouritesList';
import { Screen } from '~components/layout/Screen';
import { Box } from '~components';
import { getHiddenAsync } from '~store/hidden/hiddenSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavouritesAsync());
    dispatch(getHiddenAsync());
  }, [dispatch]);

  return (
    <Screen full>
      <Box paddingTop="m">
        <FavouritesList />
      </Box>
    </Screen>
  );
};

export default HomeScreen;
