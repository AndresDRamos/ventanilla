import {
  Footer,
  FooterActions,
  FooterText
} from './TicketResponse.styles';

const TicketResponseFooter = ({ ticket }) => {
  return (
    <Footer>
      <FooterActions>
        <FooterText>
          Respondiendo como: <strong>{ticket.usuarios.nombre}</strong> ({ticket.usuarios.correo})
        </FooterText>
      </FooterActions>
    </Footer>
  );
};

export default TicketResponseFooter;
