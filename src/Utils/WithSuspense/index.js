import React, { Suspense } from "react";
import Loading from "../../Components/Loading/view";

export const WithSuspense = (Child) => {
	const SuspenseWrapp = () => {
		return (
			<Suspense fallback={<Loading />}>
				<Child />
			</Suspense>
		);
	};

	return SuspenseWrapp;
};