import styled from 'styled-components';
import { AppLayout } from '../src/layout/AppLayout';
import { Feed, Stories } from '../src/components';

const Scroll = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100%;
`

export default function Home() {
  return (
    <AppLayout>
      <Scroll>
        <Stories />
        <Feed />
      </Scroll>
    </AppLayout>
  )
}
