import { MessageInstance } from 'antd/es/message/interface';
import Button from './components/Button';
import { createStrictContext } from './shared/lib/react';
import { message } from 'antd';

export const MessageContext = createStrictContext<{
  messageApi: MessageInstance;
}>();

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}

      <MessageContext.Provider value={{ messageApi }}>
        <div>
          <Button variant="primary">Primary</Button>
          <Button>Default</Button>
        </div>
      </MessageContext.Provider>
    </>
  );
};

export default App;
