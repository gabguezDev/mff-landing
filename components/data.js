import {
	FaceSmileIcon,
	ChartBarSquareIcon,
	CursorArrowRaysIcon,
	DevicePhoneMobileIcon,
	AdjustmentsHorizontalIcon,
	SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
	title: "¿Qué te ofrezco?",
	desc: "Un espacio de salud mental dirigido hacia infancias, adolescentes y adultos.",
	image: benefitOneImg,
	bullets: [
		{
			title: "Atención a infancias",
			desc: "Then explain the first point breifly in one or two lines.",
			icon: <FaceSmileIcon />,
		},
		{
			title: "Atención a adolescentes",
			desc: "Here you can add the next benefit point.",
			icon: <ChartBarSquareIcon />,
		},
		{
			title: "Atención a adultos",
			desc: "This will be your last bullet point in this section.",
			icon: <CursorArrowRaysIcon />,
		},
	],
};

const benefitTwo = {
	title: "¿Con qué modalidades?",
	desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
	image: benefitTwoImg,
	bullets: [
		{
			title: "Atención presencial",
			desc: "Nextly is designed as a mobile first responsive template.",
			icon: <DevicePhoneMobileIcon />,
		},
		{
			title: "Atención virtual",
			desc: "This template is powered by latest technologies and tools.",
			icon: <AdjustmentsHorizontalIcon />,
		},
	],
};

const benefitThree = {
	title: "Horarios de atención y medios de contacto",
	desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
	image: benefitTwoImg,
	bullets: [
		{
			title: "Horarios de atención",
			desc: "Lunes a Viernes de 8:00 a 12:00 y de 14:00 a 20:00",
			icon: <DevicePhoneMobileIcon />,
		},
		{
			title: "Whatsapp",
			desc: "Lunes a Viernes de 8:00 a 12:00 y de 14:00 a 20:00",
			icon: <DevicePhoneMobileIcon />,
		},
		{
			title: "Correo Electrónico",
			desc: "Lunes a Viernes de 8:00 a 12:00 y de 14:00 a 20:00",
			icon: <DevicePhoneMobileIcon />,
		},
		{
			title: "Redes Sociales",
			desc: "Lunes a Viernes de 8:00 a 12:00 y de 14:00 a 20:00",
			icon: <DevicePhoneMobileIcon />,
		},
	],
};

export { benefitOne, benefitTwo, benefitThree };
