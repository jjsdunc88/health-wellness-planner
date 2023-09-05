import styled from "@emotion/styled";

export const PreviewPageContainer = styled.div`
  max-width: 800px;
  margin: 30px auto;
  margin-bottom: 100px;
  padding: 20px;
  font-family: calibri, sans-serif;
  text-align: left;
  padding-bottom: 40px;
  background: linear-gradient(to bottom, lightgray, darkgray);
`;

export const SectionTitle = styled.h1`
  font-size: 26px;
  color: #333;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

export const ListItem = styled.li`
  font-size: 20px;
  color: #333;
`;

export const SubListItem = styled.li`
  font-size: 18px;
  color: #333;
  margin-left: 20px;
`;

export const VideoBackground = styled.video`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
z-index: -1;
`;

