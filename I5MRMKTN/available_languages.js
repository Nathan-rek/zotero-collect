










AUI.add(
	'portal-available-languages',
	function(A) {
		var available = {};

		var direction = {};

		

			available['en_US'] = 'anglais (Etats-Unis)';
			direction['en_US'] = 'ltr';

		

			available['fr_FR'] = 'français (France)';
			direction['fr_FR'] = 'ltr';

		

		Liferay.Language.available = available;
		Liferay.Language.direction = direction;
	},
	'',
	{
		requires: ['liferay-language']
	}
);