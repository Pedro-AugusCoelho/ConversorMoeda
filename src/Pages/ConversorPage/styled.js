import styled from "styled-components";

export const Main = styled.div`
max-width: 1100px;
width: 100%;
padding: 50px;

display: flex;
flex-direction: column;
flex: 1;
justify-content: center;
align-items: center;
.ContainerBox{
  display: flex;
  width:100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  .box{
  width: 33.3%;
  margin: 20px;
  input{
    width:100%;
    outline: 0;
    margin: 0;
    height: 50px;
    padding: 10px;
    font-size: 18px;
    box-shadow:3px 3px 10px #555;
  }
}

}
.title{
  display: flex;
  flex-direction: column;
}

@media (max-width: 700px){
  .ContainerBox{
  width:100%;
  flex-direction: column;
  align-items: center;
    .box{
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    }
  }
}
`;