import { Scroll } from './styles';
import { Mock } from '../../mocks/Mock';
import Story from './Story';

const Stories = () => {
    const users = Mock.users;
    
    return (
        <Scroll>
            {users.map((item, index) => <Story key={index} user={item} />)}
        </Scroll>
    );
}

export default Stories;