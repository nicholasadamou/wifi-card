export const device = {
  iPhone: () => "430px",
  iPad: () => "768px",
  iPadPro: () => "1024px",
};

export const until = (device, content) => {
  return `
		@media screen and (max-width: ${device}) {
			${content()}
		}
	`;
};

export default {
  until,
  device,
};
