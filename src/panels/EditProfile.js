import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Group, Header} from '@vkontakte/vkui';
import { FormLayout, FormItem, Input, FormLayoutGroup, Radio, Button} from '@vkontakte/vkui';
const EditProfile = props => (
	<Panel id={props.id}>
		<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>
			Профиль
		</PanelHeader>
		<FormLayout>
			<FormLayoutGroup mode="horizontal">
				<FormItem top="Имя">            
					<Input />
				</FormItem>
				<FormItem top="Фамилия">            
					<Input />
				</FormItem>
			</FormLayoutGroup>
			<FormItem top="Комната">
				<Input />
			</FormItem>
			<FormItem top="Факультет">
              	<Radio name="type">ФизФак</Radio>
              	<Radio name="type">ФИТ</Radio>
            </FormItem>
			<FormItem>
              <Button size="l" stretched>Сохранить</Button>
            </FormItem>
		</FormLayout>
	</Panel>
);

EditProfile.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default EditProfile;
