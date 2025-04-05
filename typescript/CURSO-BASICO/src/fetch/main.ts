const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

let button = document.querySelector('.btnInfo') as HTMLButtonElement;
let paragraph = document.querySelector('.info') as HTMLParagraphElement;

button.addEventListener('click', async () => {
  const data = await fetchData(
    'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json'
  );
  paragraph.textContent = JSON.stringify(data);
});
