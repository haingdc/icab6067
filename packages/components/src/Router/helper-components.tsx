import React, { PropsWithChildren } from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect(props: PropType) {
	const { user, path, loggedInPath, children, exact ,...rest } = props;
	return (
		<Route
			{...rest}
			path={path}
			exact={exact}
			render={() => {
				if (!user) {
					return children;
				}
				return (
					<Redirect to={{ pathname: loggedInPath}} />
				);
			}}
		/>
	);
}

interface PropType extends PropsWithChildren<any> {
	user: string;
	path: string;
	loggedInPath: string;
	exact?: boolean;
}

interface ProtectedPropType extends PropsWithChildren<any> {
	user: string;
	path: string;
	pathname: string;
	exact?: boolean;
}

export function ProtectedRoute(props: ProtectedPropType) {
	const { user, children, path, pathname, exact } = props;
	return (
		<Route
			path={path}
			exact={exact}
			render={value => {
				const { location } = value;
				if (user) {
					return children;
				}
				return (
					<Redirect to={{ pathname, state: { from : location } }} />
				);
			}}
		/>
	);
}