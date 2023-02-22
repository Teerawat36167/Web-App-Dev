import './App.css';
import Menu from './components/Menu';

function App() {

  const foods = [
    {
      title: 'อาหารคาว',
      menu: 'ข้าวผัด',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      url: 'https://www.ajinomoto.co.th//storage/photos/shares/our-story/tips/friedrice/62ff47ff5a301.jpg'
    },
    {
      title: 'อาหารหวาน',
      menu: 'บัวลอย',
      info: 'Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Enim nulla aliquet porttitor lacus luctus accumsan. Non enim praesent elementum facilisis leo vel fringilla. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Est sit amet facilisis magna etiam tempor. Aliquet eget sit amet tellus cras adipiscing enim eu turpis.',
      url: 'http://lamphuonline.com/images/00-2022/bua-loi-kaiwan.jpg'
    }
  ]

  return (
    <div className='App'>
      <h1 className='header'>โหวตอาหาร</h1>

      {foods.map((item, index) => (
        <Menu key={index} title={item.title} menu={item.menu} info={item.info} url={item.url}/>
      ))}

    </div>
  );
}

export default App;
