import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import  Button  from "@material-ui/core/Button"; 

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  background-color: #fff;
  height: 64px;
  border-bottom: 1px solid #eee;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Topbar: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Button onClick={() => history.push("/")}>Play Again</Button>
        <Button onClick={() => history.push("/history")}>Show Game History</Button>
      </InnerWrapper>
    </Wrapper>
  );
};

export default withRouter(Topbar);
