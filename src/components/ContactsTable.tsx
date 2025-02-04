import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getContacts } from "@/lib/data";
import CheckBox from "@/components/Checkbox";
import { formatPhoneNumber } from "@/lib/utils";
import { updateTable } from "@/lib/actions";

interface Contact {
  name: string;
  email: string;
  phone: string;
  id: string;
  hide: boolean;
  delete: boolean;
  message: string;
  createdAt: Date;
}

export default async function ContactsTable() {
  // Fetch all contacts
  const data: Contact[] = await getContacts();

  return (
    <section className="min-h-screen">
      <Table>
        <TableCaption>A list of your recent Leads.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Number</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(({ name, email, phone, id }) => (
            <TableRow key={id} id={id}>
              <TableCell className="font-medium">{name}</TableCell>
              <TableCell>{formatPhoneNumber(phone)}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell className="text-right">
                <CheckBox id={id} action={updateTable} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
