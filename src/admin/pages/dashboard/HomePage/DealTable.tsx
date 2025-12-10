import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

function createData(
  no: number,
  image: string,
  category: string,
  discount: string
) {
  return { no, image, category, discount };
}

const rows = [
  createData(1, "Image1", "Snacks", "20%"),
  createData(2, "Image2", "Dessert", "15%"),
  createData(3, "Image3", "Bakery", "10%"),
];

export default function DealTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="deal table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Discount</TableCell>
            <TableCell align="center">Update</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.no}>
              <TableCell>{row.no}</TableCell>
              <TableCell align="right">{row.image}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.discount}</TableCell>

              {/* Update Button */}
              <TableCell align="center">
                <Button color="primary">
                  <Edit />
                </Button>
              </TableCell>

              {/* Delete Button */}
              <TableCell align="center">
                <IconButton>
                  <Delete sx={{ color: "red" }} />
                </IconButton>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
