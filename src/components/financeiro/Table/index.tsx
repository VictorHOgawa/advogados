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

interface TransferProps {
  transfers: {
    date: string;
    description: string;
    value: number;
    status: string;
  }[];
}
export function TransferTable({ transfers }: TransferProps) {
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
          {transfers.map((item) => (
            <>
              <TableRow>
                <TableCol xs="3">
                  <span>{item.date}</span>
                </TableCol>
                <TableCol xs="3">{item.description}</TableCol>
                <TableCol
                  xs="3"
                  className={`${item.value < 0 ? "text-red-500" : "text-green-500"}`}
                >
                  {item.value.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCol>
                <TableCol xs="3">
                  {item.status === "PAGO" ? (
                    <Status paid={true}>PAGO</Status>
                  ) : (
                    <Status paid={false}>PENDENTE</Status>
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
