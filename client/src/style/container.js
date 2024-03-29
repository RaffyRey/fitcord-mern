import styled from 'styled-components';

export const PageContainer = styled.div`
	width: 100%;
	height: 100vh;
	overflow: auto;
	display: block;
	position: relative;
	margin: 0;
	padding: 0;
`;

export const PageContent = styled.main`
	width: 100%;
	max-width: 1440px;
	padding-bottom: 30px;
	margin: 0 auto;
	position: relative;
	display: block;
`;

export const Form = styled.form`
	max-width: 1000px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	padding-bottom: 2rem;
	overflow: auto;

	span {
		font-size: 0.9rem;
		margin: 1rem 0;
		font-family: 'Poppins';
		color: #00193b;
	}

	a {
		font-size: 0.9rem;
		font-style: normal;
		font-weight: 500;
		text-decoration: none;
		color: #0086eb;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const DashboardContent = styled.div`
	width: 100%;
	height: calc(100% - 80px);
	position: relative;
`;
