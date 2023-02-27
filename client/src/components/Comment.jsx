import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`;

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin-left: 5px;
`;

const Text = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.text};
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" />
      <Details>
        <Name>
          GLad2Help<Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          reprehenderit porro ad aperiam! Ab recusandae sit in commodi molestiae
          amet?
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
