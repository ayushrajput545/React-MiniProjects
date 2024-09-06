import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';
function App() {
  return (
    <div className='w-full h-screen flex flex-col background relative overflow-x-hidden items-center'> 
      
      <h1 className=' absolute bg-white rounded-lg w-11/12 mt-[40px] text-center ml-[50px] mr-[25px] px-10 py-2
      text-4xl font-bold '>RANDOM GIFS</h1>
      <div className='felx flex-col w-full  mt-[8rem] '>
         <Random/>
         <Tag/>
      </div>
     
    </div>
  );
}

export default App;
