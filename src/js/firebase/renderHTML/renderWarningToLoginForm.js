// рисуем ошибку в форме
export const renderWarningToLoginForm = (htmlcollection, error) => {
  for (const item of htmlcollection) {
    if (item.dataset.error === 'warning') {
      item.textContent = error.slice(5).split('-').join(' ');
      setTimeout(() => {
        item.textContent = '';
      }, '5000');
    }
  }
};
