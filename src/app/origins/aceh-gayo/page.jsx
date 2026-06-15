import OriginDetailPage, { buildOriginMetadata } from "../OriginDetail";

export const metadata = buildOriginMetadata("aceh-gayo");

export default function AcehGayoPage() {
  return <OriginDetailPage slug="aceh-gayo" />;
}
