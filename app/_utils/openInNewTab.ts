const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, '_black', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

export default openInNewTab;
