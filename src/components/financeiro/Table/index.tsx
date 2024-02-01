import Theme from "@/styles/themes";
import {
  Status,
  TableCol,
  TableContainer,
  TableContent,
  TableHeader,
  TableRow,
  TableRows,
} from "./styles";

export function UsersTable() {
  const items = [{
    date: "05/11/23",
    description: "Saque via pix",
    value: "1.550,00",
    status: "PAGO"
  }, {
    date: "05/11/23",
    description: "Saque via pix",
    value: "1.550,00",
    status: "Pendente"
  }, {
    date: "05/11/23",
    description: "Saque via pix",
    value: "1.550,00",
    status: "PAGO"
  }, {
    date: "05/11/23",
    description: "Saque via pix",
    value: "1.550,00",
    status: "PAGO"
  }]

  return (
    <TableContainer>
      <TableContent>
        <TableHeader>
          <TableCol xs="3">Data</TableCol>
          <TableCol xs="3">Descrição</TableCol>
          <TableCol xs="3">Valor</TableCol>
          <TableCol xs="3">Status</TableCol>
        </TableHeader>
        <TableRows>
          {items.map((index) => (
            <>
              <TableRow>
                <TableCol xs="3">
                  <span>{index.date}</span>
                </TableCol>
                <TableCol xs="3">{index.description}</TableCol>
                <TableCol xs="3">{index.value}</TableCol>
                <TableCol xs="3">
                  {index.status === "PAGO" ? (
                <Status paid={true}>
                  PAGO
                </Status>
                  ) : (
                    <Status paid={false}>
                      PENDENTE
                    </Status>
                  )}
                </TableCol>
              </TableRow>
              <hr />
            </>
          ))}
        </TableRows>
      </TableContent>
    </TableContainer>
  );
}
