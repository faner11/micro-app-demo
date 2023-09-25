
import { Select, Tooltip } from 'antd'

function App() {

  return (
    <>
      <div style={{
        background: "#f1d4df",
        width: 600,
        height: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }} >
        <h2>child-app antd</h2>

        <Tooltip title="xxx" >
          Tooltip 异常无法展示到正确的位置
        </Tooltip>

        <Select
          placeholder='xxxxxxx'
          options={[
            {
              label: '11',
              value: 22
            }

          ]} ></Select>
      </div >
    </>
  )
}

export default App
