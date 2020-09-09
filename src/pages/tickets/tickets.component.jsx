import React from "react";
import "./tickets.styles.scss";
import Grid from "./grid/grid.component";
import Ticket from "./ticket/ticket.component";
import { useState } from "react";

function Tickets() {
  const [tickets, setTickets] = useState(
    [...Array(10).keys()].map((val) => ({ name: val + 1, isUsed: false }))
  );

  function ticketClicked(ticketName) {
    let newTickets = [...tickets];
    newTickets.find((curr) => curr.name === ticketName).isUsed = true;

    setTickets(newTickets);
  }

  return (
    <div className="tickets">
      <Grid>
        {tickets.map((ticket) => (
          <Ticket
            ticketClicked={ticketClicked}
            key={ticket.name}
            ticket={ticket}
          />
        ))}
      </Grid>
    </div>
  );
}

export default Tickets;
