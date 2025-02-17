const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1000px;
  padding: 15px 30px;
  border-radius: 20px;
  background: rgb(245, 245, 245);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    color: black;
  }

  .email-icon {
    font-size: 20px;
    color: black;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease-in-out;
  }

  a:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 20px;
    color: black;
  }
`;
