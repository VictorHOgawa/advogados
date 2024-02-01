import styled from "styled-components";

export const IndicationCard = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 1rem;
height: 10rem;
width: 94%;
border-radius: 10px;
border: 1px solid black;
background-color: transparent;
overflow: hidden;
div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
h3, p{
  margin: 0;
}

h3{
  font-size:  1.2rem;
  font-weight: bold;
  line-height: 1rem;
  text-align: center;
  margin-top: 0.3rem;
}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;

}
p{
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  font-size: 0.8rem;

}
button{
  background-color: #2F5CFC;
  padding: 0.1rem;
  border: none;
  width: 6rem;
  color: white;
  border-radius: 5px;
  font-size: 0.8rem;
  margin-bottom: 0.6rem;
}
`;