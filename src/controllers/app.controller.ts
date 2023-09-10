import { Request, Response } from "express";
import moment from "moment";

const options: object = { weekday: "long" };
const day = new Date();

export default class AppController {
	static async handelEndpoint(
		req: Request<{ slack_name: "string"; track: "string" }>,
		res: Response
	) {
		const today = new Date();

		const getDay = today.getDay();
		const dayNames = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];

		const slack_name = req.query.slack_name;
		const track = req.query.track;
		// const utc_time = new Date(
		// 	Date.UTC(
		// 		new Date().getFullYear(),
		// 		new Date().getMonth(),
		// 		new Date().getDate(),
		// 		new Date().getHours(),
		// 		new Date().getMinutes(),
		// 		new Date().getSeconds(),
		// 		new Date().getMilliseconds()
		// 	)
		// ).toISOString();

		const utc_time = moment.utc().format();
		return res.status(200).json({
			slack_name: slack_name,
			current_day: dayNames[getDay],
			utc_time: utc_time,
			track: track,
			github_file_url:
				"https://github.com/StephanieMfon/HNG-Task1/blob/main/src/app.ts",
			github_repo_url: "https://github.com/StephanieMfon/HNG-Task1",
			status: "success",
		});
	}
}
