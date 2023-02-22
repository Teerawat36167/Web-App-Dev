import './App.css';
import Menu from './components/Menu';

function App() {

  const food = [
    {
      title: 'อาหารคาว',
      menu: 'ข้าวผัด',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      url: ''
    },
    {
      title: 'อาหารหวาน',
      menu: 'บัวลอย',
      info: 'Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Enim nulla aliquet porttitor lacus luctus accumsan. Non enim praesent elementum facilisis leo vel fringilla. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Est sit amet facilisis magna etiam tempor. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Vitae elementum curabitur vitae nunc sed velit dignissim. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et.',
      url: ''
    }
  ]

  return (
    <div className='App'>
      <h1 className='header'>โหวตอาหาร</h1>

      {food.map((item, index) => (
        <Menu key={index} title={item.title} menu={item.menu} />
      ))}

    </div>
  );
}

export default App;
