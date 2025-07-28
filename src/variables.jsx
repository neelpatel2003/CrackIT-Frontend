const getUserName = () => localStorage.getItem('userName') || '';
const setUserName = (name) => localStorage.setItem('userName', name);
const getIsLoggedIn = () => localStorage.getItem('isloggedIn') === 'true';
const setIsLoggedIn = (val) => localStorage.setItem('isloggedIn', val);

export default { getUserName, setUserName, getIsLoggedIn, setIsLoggedIn };