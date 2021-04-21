import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, CellButton, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
//import { Icon28AddOutline, Icon28DeleteOutline } from '@vkontakte/icons';
import * as Icons from '@vkontakte/icons';
const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Главная </PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">Активная запись</Header>}>
			<Cell>
				У вас нет активной записи
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Действия</Header>}>
			<CellButton before={<Icons.Icon28ArticleOutline />} onClick={go} data-to="rules" >Правила</CellButton>
      		<CellButton before={<Icons.Icon28AddOutline />} onClick={go} data-to="record">Записаться</CellButton>
			<CellButton before={<Icons.Icon28EditOutline />} onClick={go} data-to="editProfile">Редактировать профиль</CellButton>
			<CellButton before={<Icons.Icon28DeleteOutline />} mode="danger">Удалить запись</CellButton>
					
    	</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
