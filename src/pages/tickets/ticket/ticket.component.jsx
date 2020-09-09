import React from "react";
import "./ticket.styles.scss";

function Ticket({ ticket, ticketClicked }) {
  return (
    <div
      onClick={() => ticketClicked(ticket.name)}
      className={`ticket ${ticket.isUsed ? "used" : ""}`}
    >
      {ticket.name}
    </div>
  );
}

export default Ticket;
