import { toggleTheme } from '../../features/theme/themeSlice';
import { useAppDispatch } from '../../module/store';

export const setTheme = () => {
    const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    let initTheme = isBrowserDarkMode ? 'black' : 'white';
    const dispatch = useAppDispatch();

    const localSettingTheme = localStorage.getItem('theme');

    if (localSettingTheme) {
        initTheme = localSettingTheme;
    }

    const theme = initTheme == 'white' ? 'white' : 'black';

    dispatch(toggleTheme({ themeType: theme }));
};
