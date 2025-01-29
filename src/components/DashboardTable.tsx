import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getLatestContacts } from "@/lib/data";
import CheckBox from "@/components/Checkbox";
import { formatPhoneNumber } from "@/lib/utils";
import { hideContact } from "@/lib/actions";

interface Data {
  id: string;
  name: string;
  email: string;
  phone: string;
  hide: boolean;
  delete: boolean;
  message: string;
  createdAt: Date;
}

export default async function DashboardTable() {
  // Fetch the 7 latest contacts
  const data: Data[] = await getLatestContacts();

  return (
    <Table className="overflow-hidden">
      <TableCaption>A list of your recent Leads.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
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
            <TableCell className="text-center">
              <CheckBox id={id} action={hideContact} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
