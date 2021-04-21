import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Group, Link} from '@vkontakte/vkui';
import { FormLayout, FormItem, Checkbox, FormLayoutGroup, Select, Button} from '@vkontakte/vkui';

const Record = props => (
	<Panel id={props.id}>
		<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>
			Запись
		</PanelHeader>
		<FormLayout>
			<FormLayoutGroup mode="horizontal">
				<FormItem top="День недели">            
					<Select
						placeholder="Не выбрано"
					/>
				</FormItem>
				<FormItem top="Время">            
					<Select
						placeholder="Не выбрано"
					/>
				</FormItem>
			</FormLayoutGroup>
			<FormItem>
				<Checkbox>Согласен со всеми правилами</Checkbox>
			</FormItem>
			<FormItem>
              <Button size="l" stretched>Сохранить</Button>
            </FormItem>
		</FormLayout>
	</Panel>
);

Record.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Record;
