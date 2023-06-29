
import { SearchOutlined } from '@ant-design/icons'
import {  Tooltip } from 'antd'

function App() {

  return (
    <>
      <div style={{
        background:"#3f373a",
        width: 600,
        height: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }} >
        <h2>child-app antd</h2>

        icon异常: <SearchOutlined/>

        <Tooltip title="xxx" >
          Tooltip 异常无法展示到正确的位置
        </Tooltip>
      </div>
    </>
  )
}

export default App
