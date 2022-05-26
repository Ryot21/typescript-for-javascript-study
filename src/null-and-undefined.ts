export {};

// null型(型推論では指定できない)
		let absence: null = null;
		// これで「null」以外を持つことができなくなった。(確認)
		// absence = 1;
		console.log({absence});


// undefined型(型推論では指定できない)
		let data: undefined = undefined;
		// これで「undefined」以外を持つことができなくなった。(確認)
		// data = 1;
		console.log({data});
