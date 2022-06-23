import './App.css'
import { faker } from '@faker-js/faker'
import { FixedSizeList } from 'react-window'

function App() {
  const data = [...Array(5000)].map(() => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
  }))

  const renderUser = ({ index, style }) => (
    <div style={style} className='flex gap-8 items-center mt-2'>
      <div className='w-8 h-8 border rounded-full flex items-center justify-center'>
        {index + 1}
      </div>
      <img
        className='rounded-full'
        src={data[index].avatar}
        alt={data[index].name}
        width={50}
      />
      <div className='flex flex-col'>
        <div className='text-lg'>{data[index].name}</div>
        <div className='text-sm'>{data[index].email}</div>
      </div>
    </div>
  )

  return (
    <div>
      <FixedSizeList
        height={600}
        width={window.innerWidth}
        itemCount={data.length}
        itemSize={50}>
        {renderUser}
      </FixedSizeList>
    </div>
  )
}

export default App
