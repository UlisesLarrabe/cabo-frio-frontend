import FlavourEdit from "@/components/FlavourEdit";
import { API_URL } from "@/consts/api_url";

const FlavourDetail = async ({
  params,
}: {
  params: Promise<{ idFlavour: string }>;
}) => {
  const { idFlavour } = await params;
  const flavour = await fetch(`${API_URL}/flavours/${idFlavour}`);
  const data = await flavour.json();
  return <FlavourEdit flavour={data} />;
};

export default FlavourDetail;
